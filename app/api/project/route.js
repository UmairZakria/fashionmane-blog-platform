import connectMongo from "@/lib/connectMongo";
import Project from '@/app/models/Project';


export async function GET(request) {

  try {
    await connectMongo();
    const url = new URL(request.url)
    const id = url.searchParams.get('id');
    if (id) {
      const data = await Project.findById(id);
      if (!data) {
        return new Response(JSON.stringify({ message: 'project not found' }))
      }
      return new Response(JSON.stringify({ data: data }));

    } else {
      const data = await Project.find({})
      if (!data) {
        return new Response(JSON.stringify({ message: 'Projects not found' }))
      }
      return new Response(JSON.stringify({ data: data }))
    }

  } catch (error) {
    return new Response(JSON.stringify({ message: error }))

  }

}

export async function POST(request) {
  try {
    const { name, discription, sourcelink, imgs, skills } = await request.json();
    await connectMongo();
    const project = new Project({ name, discription, sourcelink, imgs, skills });
    await project.save();

    return new Response(JSON.stringify({ project: 'Project' }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ project: 'error', err: error }), {
      status: 501,
    });
  }
}
export async function PUT(request) {
  try {
    const { id, name, discription, sourcelink, imgs, skills } = await request.json();
    await connectMongo();
    const project = await Project.findById(id)
    if (project){
      project.name = name
      project.discription = discription
      project.sourcelink = sourcelink
      project.imgs =  imgs
      project.skills = skills
      await project.save()
      return new Response(JSON.stringify({ project: 'Project' }), {
        status: 201,
      });



    }else{
      return new Response(JSON.stringify({project : false}))
    }


  } catch (error) {
    return new Response(JSON.stringify({ project: 'error3', err: error }), {
      status: 501,
    });
  }
}


export async function DELETE(request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return new Response(JSON.stringify({ project: 'ID is required' }), {
        status: 400,
      });
    }
    await connectMongo();
    const deletedproject = await Project.findByIdAndDelete(id);
    if (!deletedproject) {
      return new Response(JSON.stringify({ project: 'project not found' }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ status: 'success', deletedproject }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ project: 'error', error }), {
      status: 500,
    });
  }
}

