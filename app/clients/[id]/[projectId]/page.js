export default function ProjectDetailPage({ params }) {

    const { id: clientId, projectId } = params;

    return(
        <h1>
            Project { projectId } of { clientId }
        </h1>
    )
}