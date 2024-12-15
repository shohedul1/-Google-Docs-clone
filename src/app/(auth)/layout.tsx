
interface AuthLayoutProps {
    children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            <p className="w-full bg-red-500">Document Id now</p>
            {
                children
            }
        </div>
    )
}

export default AuthLayout