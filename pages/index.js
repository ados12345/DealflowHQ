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
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Login successful!');
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-10">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        {message && <p className="text-red-600">{message}</p>}
      </form>
    </div>
  );
}
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
import { useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setMessage(error.message);
    else setMessage('Login successful!');
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-10">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
        {message && <p className="text-red-600">{message}</p>}
      </form>
    </div>
  );
}
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
