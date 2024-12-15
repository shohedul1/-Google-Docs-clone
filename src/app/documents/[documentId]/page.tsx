'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Editor from "./editor";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>; // `params` is now a Promise
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
    const router = useRouter();
    const [documentId, setDocumentId] = useState<string | null>(null);

    useEffect(() => {
        const fetchParams = async () => {
            try {
                const resolvedParams = await params;
                setDocumentId(resolvedParams.documentId);
            } catch (error) {
                console.error("Failed to resolve params:", error);
                router.push('/'); // Handle error by redirecting
            }
        };

        fetchParams();
    }, [params, router]);

    useEffect(() => {
        if (documentId === null) return;
        if (!documentId) {
            router.push('/');
        }
    }, [documentId, router]);

    if (documentId === null) {
        return <div>Loading...</div>; // Show a loading state while waiting for params
    }

    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor />
        </div>
    );
};

export default DocumentIdPage;
