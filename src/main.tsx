import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MainProvider } from './providers'
import { Routing } from './routing'
import { Layout } from './layout'
import './localization'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <MainProvider>
        <Layout>
          <Routing />
        </Layout>
      </MainProvider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
