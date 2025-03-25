import connectMongo from "@/lib/connectMongo";
import Message from "@/app/models/Message";


export async function GET(request) {
    await connectMongo()

    const data = await Message.find({})
    if (!data){
        return new Response(JSON.stringify({ message: 'Message box is empty' }));

    }
    return new Response(JSON.stringify({ data:data }),{
        status: 201,
      })




    
}

export async function POST(request){
    try{
      const {fname,lname,email,budget,discription} = await request.json();
      await connectMongo()
      const mesage = new Message({fname,lname,email,budget,discription})
      await mesage.save()
      return new Response(JSON.stringify({status: 'success'}),{
        status: 201,
      })


    }catch (error){
        return new Response(JSON.stringify({ message: 'error',err : error }), {
            status: 500,
          });

    }

}

export async function DELETE(request) {
    try {
        const url = new URL(request.url);
        const id = url.searchParams.get('id'); 

        if (!id) {
            return new Response(JSON.stringify({ message: 'ID is required' }), {
                status: 400,
            });
        }

        await connectMongo();
        const deletedMessage = await Message.findByIdAndDelete(id);

        if (!deletedMessage) {
            return new Response(JSON.stringify({ message: 'Message not found' }), {
                status: 404,
            });
        }

        return new Response(JSON.stringify({ status: 'success', deletedMessage }), {
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'error', error }), {
            status: 500,
        });
    }
}