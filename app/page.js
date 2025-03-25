import Main from "@/app/components/Main";

async function getData() {
    try {
        const res2 = await fetch('https://fashionmane.vercel.app/api/findblogs', {
            method: 'POST', // Use POST method
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ category: 'all' }),  // Pass category in request body
            next: { revalidate: 3600 }, // Revalidation option
          })
        const posts = await res2.json();

        return { data: posts.post };
    } catch (err) {
        console.error("Error fetching post data:", err);
        return { data: [], data: [] };
    }
}

export default async function Page() {

    const {  data } = await getData();

    if (data.length <= 0) {
        return <h1 className="flex items-center justify-center">The Page is Under Maintaince</h1>;
    }

    return (
        <>
            <Main 
            data={data} 
            />
        </>
    );
}
