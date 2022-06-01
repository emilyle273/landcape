
import { deleteLocalStorage } from "services/localstorage";
import { useRouter } from "next/router";
import Container from "components/Container";
import { memo } from "react";

const Header = () => {
  const route = useRouter()
  const handleLogout = async() => {
    await deleteLocalStorage('accessToken')

    route.push('/', '', { shallow: true })
  }

  return (
    <header className="w-full h-[70px] bg-blue-400">
      <Container className=" h-full bg-transparent flex justify-end items-center">
        <button className="text-white font-bold border-none my-auto" onClick={handleLogout}>Logout</button>
      </Container>
    </header>
  );
};

export default memo(Header)

