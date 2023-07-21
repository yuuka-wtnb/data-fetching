import path from 'path';
import fs from 'fs/promises';

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
  //cwd=current working directory
  //'data'-> because we wanna dive into the data folder
  const filePath = path.join(process.cwd(), 'data','dummy-backend.json')
  const jsonData = await fs.readFile(filePath);
  //Json.parseはJsonデータを通常のJavaScriptオブジェクトに変換
  const data = JSON.parse(jsonData);

  return {
    props: {
      products:data.products
    },
  };
}

export default HomePage;
