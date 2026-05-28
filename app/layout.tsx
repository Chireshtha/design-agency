import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Agency',
  description: 'Agency Website',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout;