import React, { useContext } from 'react'
import { UserContext } from '../context/User'

import Button from '../components/Button'

export default function Profile() {
  const { logout } = useContext(UserContext)

  return (
    <div>
      <Button onClick={logout} text="Cerrar sesión" />
    </div>
  )
}
