import dynamic from "next/dynamic";

const LogoutButton = dynamic(() => import('@/components/home/logoutButton'))

export default function Home() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <LogoutButton />
      <h1>Selamat Datang Di Halaman Beranda</h1>
    </div>
  );
}
