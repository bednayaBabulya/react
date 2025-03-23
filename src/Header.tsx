import { useContext } from "react"
import { AuthContext } from "./AuthContext"

export function Header() {
    const {isLoggedIn} = useContext(AuthContext)
    return <h2>{isLoggedIn ? 'Привет, Никита!' : ''}</h2>
}