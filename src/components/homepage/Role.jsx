
export default function Role({forwardedRef}) {
  return (
    <section ref={forwardedRef}  className="select-none flex my-20 md:my-[12%] py-10 flex-col items-center justify-center overflow-hidden nav-change" aria-label="">
      <div className="flex w-full items-center space-x-20">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
        "The only way to do great work is to love what you do." 
        <br></br>
        <br></br>
        – Steve Jobs 
        </h1>
      </div>
    </section>
  );
}
