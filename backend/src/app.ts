import express, { Express } from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { config } from './config/env'
import { getAllowedOrigins } from './utils/cors.util'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.middleware'
import { apiLimiter } from './middleware/rateLimiter.middleware'

// Import routes
import authRoutes from './routes/auth.routes'
import packageRoutes from './routes/packages.routes'
import bookingRoutes from './routes/bookings.routes'
import reviewRoutes from './routes/reviews.routes'
import notificationRoutes from './routes/notifications.routes'
import agencyRoutes from './routes/agencies.routes'
import aiRoutes from './routes/ai.routes'

const app: Express = express()

// Security middleware
app.use(helmet())
app.use(cors({
  origin: (origin, callback) => {
    const allowed = getAllowedOrigins()
    if (!origin || allowed.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true,
}))

// Body parsing middleware (increased limit for image uploads)
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true, limit: '50mb' }))

// Logging
if (config.nodeEnv === 'development') {
  app.use(morgan('dev'))
}

// Rate limiting
app.use('/api', apiLimiter)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API routes
app.use('/api/auth', authRoutes)
app.use('/api/packages', packageRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/notifications', notificationRoutes)
app.use('/api/agencies', agencyRoutes)
app.use('/api/ai', aiRoutes)

// AI Agent Proxy
app.use('/api/agent', createProxyMiddleware({
  target: process.env.AI_AGENT_URL || 'http://localhost:5001',
  changeOrigin: true,
  pathRewrite: {
    '^/api/agent': '', // remove /api/agent prefix when forwarding
  },
}))

// Error handling
app.use(notFoundHandler)
app.use(errorHandler)

export default app
