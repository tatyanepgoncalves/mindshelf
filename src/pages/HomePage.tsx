import { LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div>
      HomePage
      <Button size="icon">
        <Link to="/">
          <LogOut />
        </Link>
      </Button>
    </div>
  )
}
