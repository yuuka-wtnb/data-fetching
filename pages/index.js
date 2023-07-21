function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((products) => (
        <li key={products.id}>{products.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: [{ id: "P1", title: "Product 1" }],
    },
  };
}

export default HomePage;
