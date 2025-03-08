import { getAssetURL } from "./getAssetURL";
import { getData } from "./getData";

export async function AboutPage() {
	const { globals } = await getData()

	return <div className='w-full flex flex-col md:flex-row gap-0 border-main-600 border-solid border-b-1 mb-20 items-stretch justify-evenly content-stretch'>

		<div className='w-full md:w-[20rem] shrink-0 h-full flex items-center justify-center py-10 relative border-main-600 border-solid border-r-1'>
			<img className="h-[15em] rounded-2xl " src={getAssetURL(globals.author_picture)} alt={globals.header_name} />
		</div>
		<div className='p-10  bg-main-800'>

			<div className='mt-6 font-serif text-lg prose prose-invert max-w-none space-y-4'
				dangerouslySetInnerHTML={{ __html: globals.author_about }} />
		</div>
	</div>
}