// Master Styles - Super crappy escape hatch for all the resets :D



const Page = ({ children }) => (
  <div>
    <style jsx global>{`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');
      body {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Open Sans', sans-serif;
      }
      p,h1,h2,h3,h4,h5 {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
      }
    `}</style>
    {children}
  </div>
)

export default Page
