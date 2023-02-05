export default function Home() {
  return (
    <>
      <div>Navbar</div>
      <div>Banner</div>
      <div>
        {['Property 1', 'Property 2', 'Property 3'].map((property) => property)}
      </div>
      <div>Footer</div>
    </>
  );
}
