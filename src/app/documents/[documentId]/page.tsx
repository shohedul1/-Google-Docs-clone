import Editor from "./editor";

interface DocumentIdProps {
    params: Promise<{ documentId: string }>;
}
const DocumentIdPage = async ({ params }: DocumentIdProps) => {
    const awiatedParams = await params;
    const documentId = awiatedParams.documentId

    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor />
        </div>
    )
}

export default DocumentIdPage