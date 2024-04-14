"use client"
{/* error page has to be a client component because there are ways to recover from an error */}
export default function Error() {
    return (
        <div style={{ textAlign: 'center', fontSize: '100px' }}>
            404 ERROR
        </div>
    )
}