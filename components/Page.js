// Master Styles - Super crappy escape hatch for all the resets :D



const Page = ({ children }) => (
  <div>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        border: 0;
      }
      p,h1,h2,h3,h4,h5 {
        margin: 0;
        font-family: 'open sans'
      }
    `}</style>
    {children}
  </div>
)

export default Page
