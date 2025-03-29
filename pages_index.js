import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Welcome to DealFlowHQ</h1>
      <p className="mt-4">Your all-in-one real estate transaction manager</p>
      <div className="mt-6 flex gap-4 justify-center">
        <Link href="/login"><button className="px-4 py-2 bg-blue-500 text-white rounded">Login</button></Link>
        <Link href="/new-transaction"><button className="px-4 py-2 bg-green-500 text-white rounded">New Transaction</button></Link>
        <Link href="/dashboard"><button className="px-4 py-2 bg-gray-700 text-white rounded">Dashboard</button></Link>
      </div>
    </div>
  );
}
