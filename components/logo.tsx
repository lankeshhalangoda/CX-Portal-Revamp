import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logo.png" alt="Emojot Logo" width={120} height={32} className="h-8 w-auto" />
    </Link>
  )
}
