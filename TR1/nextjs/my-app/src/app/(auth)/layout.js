export default function AuthLayout({ children }) {
    return (
        <div>
            <h1 className="text-3xl font-bold bg-sky-200">Auth - Layout Page</h1>
            {children}
            <h1 className="text-3xl font-bold bg-gray-300">Auth Footer - Layout Page</h1>
        </div>
    );
  }