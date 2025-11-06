'use server'

import { checkVectorConnection } from '@/lib/rag-search'

export async function testDatabaseConnection() {
  try {
    const result = await checkVectorConnection()
    return { 
      success: result.connected, 
      error: result.error,
      result: result
    }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to test connection' 
    }
  }
}