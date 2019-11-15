// Master Styles - Super crappy escape hatch for all the resets :D



const Page = ({ children }) => (
  <div>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        border: 0;
      }
      p {
        margin: 0;
      }
    `}</style>
    {children}
  </div>
)

export default Page
