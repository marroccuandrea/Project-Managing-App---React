export default function ProjectSidebar() {
  return (
    <aside className=" md:w-1/3 bg-blue-500 px-8 py-16 rounded-r-lg text-stone-50 shadow-lg">
      <h2 className=" mb-8 font-bold uppercase md:text-xl lg:text-2xl">
        I tuoi progetti
      </h2>
      <div>
        <button className=" bg-red-800 px-4 py-2 rounded-lg hover:bg-red-600 hover:text-gray-900 transition duration-250 shadow-md">
          Aggiungi Progetto
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
