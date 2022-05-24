
import { deleteLocalStorage } from "services/localstorage";
import { useRouter } from "next/router";
import Container from "components/Container";

const Header = () => {
  const route = useRouter()
  const handleLogout = async() => {
    await deleteLocalStorage('accessToken')

    route.push('/login')
  }

  return (
    <header className="w-full h-[70px] bg-blue-400">
      <Container className=" h-full bg-transparent flex justify-end items-center">
        <button className="text-white font-bold border-none my-auto" onClick={handleLogout}>Logout</button>
      </Container>
    </header>
  );
};

export default Header
