import { client } from "../../database";

const deleteProdutorService = async (idProdutor: string): Promise<void> => {
  const queryString: string = `UPDATE produtor
    SET active = false
    WHERE idProdutor = $1`;

  await client.query(queryString, [idProdutor]);
};

export default deleteProdutorService;
