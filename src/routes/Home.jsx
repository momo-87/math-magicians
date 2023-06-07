import styles from 'styles/Home.module.css';

const Home = () => {
  const homeTitle = 'Welcome to our page!';
  const homeParagraph1 = 'Lorem ipsum dolor sit amet, cu elit perfecto constituam sea. In fugit munere adipisci nec. Ferri pertinacia eloquentiam mea eu, pro utroque feugait periculis no. Nec oblique saperet salutatus te. Habeo causae voluptatibus mea cu, te ferri malis nam. An mei reque invidunt necessitatibus, ius stet aperiri vivendum ne, ferri minim reprimique eum an. Ne eripuit molestie nam, his et simul aperiam voluptatum, id explicari deseruisse his';
  const homeParagraph2 = 'Meis inimicus et mea, eum vulputate cotidieque an. At duo ubique appareat pericula, laudem mollis oportere nam ea. Te ius decore dictas repudiare, per alia mundi diceret ex. Dicta minim ei pri, mel ut referrentur suscipiantur. Duo ut quando numquam, id mucius aliquip bonorum usu.';
  return (
    <div className={styles.homePageWrapper}>
      <h1>{homeTitle}</h1>
      <div className={styles.paragraphBox}>
        <p>{homeParagraph1}</p>
        <p>{homeParagraph2}</p>
      </div>
    </div>
  );
};
export default Home;
