/** biome-ignore-all lint/style/useFilenamingConvention: it's necessary */
import { ChevronDown, LogOut } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAvatar } from '@/hooks/useAvatar'
import { auth } from '@/services/firebaseConnection'
import { avatarMenu } from '@/types/menu'
import Loading from './Loading'

export default function AvatarHeader() {
  const { user, loading, getInitials } = useAvatar()

  if (loading) {
    return <Loading />
  }

  return (
    <div className="w-full md:w-55">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label="User menu"
            className="flex h-auto w-full items-center justify-between border-0 p-2 shadow-none"
            variant="secondary"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                {/* Firebase photoURL used here */}
                <AvatarImage
                  alt={user?.displayName || 'User'}
                  src={user?.photoURL || ''}
                />
                <AvatarFallback>
                  {getInitials(user?.displayName || user?.email)}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start text-left">
                <p className="font-medium text-sm leading-none">
                  {user?.displayName}
                </p>
                <p className="w-32 truncate text-muted-foreground text-xs">
                  {user?.email}
                </p>
              </div>
            </div>
            {/* Only rotate if you want it to point up */}
            <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-75 md:w-55" side="top">
          <DropdownMenuGroup>
            {avatarMenu.map((item) => (
              <DropdownMenuItem asChild key={item.title}>
                <Link
                  className="flex w-full cursor-pointer items-center gap-2"
                  to={item.path}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              </DropdownMenuItem>
            ))}

            {/* Added a Logout option */}
            <DropdownMenuItem onClick={() => auth.signOut()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
