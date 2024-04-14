"use client"
{/* error page has to be a client component because there are ways to recover from an error */}

{/* The file name matters, not the function name */}
{/* If we don't use the error page, the whole application will fail */}
{/* Only the page  inside [id] folder will fail, so the nav bar will be rendered. */}
export default function Error() {
    return (
        <div style={{ textAlign: 'center', fontSize: '100px' }}>
            404 ERROR
        </div>
    )
}