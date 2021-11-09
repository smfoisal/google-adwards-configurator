import SectionContent from "components/section-content";
import ListItem from "components/list-item";
import { Paper } from "components/common";
import InputAddItem from "components/input-add-item";
import { useQuery, useMutation, gql } from "@apollo/client";

const KEYWORDS = gql`
  query Keywords {
    keywords {
      id
      name
    }
  }
`;

const ADD_KEYWORD = gql`
  mutation addKeyword($name: String!) {
    addKeyword(name: $name) {
      id
      name
    }
  }
`;

const REMOVE_KEYWORD = gql`
  mutation removeKeyword($id: Float!) {
    removeKeyword(id: $id)
  }
`;

const KeywordsList = () => {
  const { loading, error, data } = useQuery(KEYWORDS);
  const [addKeyword] = useMutation(ADD_KEYWORD, {
    onError: error => {
      console.log(error);
    },
    refetchQueries: [{ query: KEYWORDS }]
  });
  const [removeKeyword] = useMutation(REMOVE_KEYWORD, {
    onError: error => {
      console.log(error);
    },
    refetchQueries: [{ query: KEYWORDS }]
  });

  const onAddKeword = (name: string) => {
    const checkString = name.replace(/\s/g, "");
    if (checkString === "") return;

    addKeyword({ variables: { name } });
  };

  const onRemoveKeyword = (id: number) => {
    removeKeyword({ variables: { id } });
  };

  if (loading) {
    return (
      <Paper elevation={0} isfullheight={1} sx={{ p: "16px" }}>
        <div>Loading...</div>
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper elevation={0} isfullheight={1} sx={{ p: "16px" }}>
        <div>Something went wrong...</div>
      </Paper>
    );
  }

  return (
    <>
      <Paper elevation={0} isfullheight={1}>
        <SectionContent showbottomborder={1}>
          <InputAddItem onAdd={onAddKeword} itemType={"keywords"} />
        </SectionContent>
        <SectionContent>
          {data.keywords.map(({ id, name }: any) => (
            <ListItem
              key={id}
              value={name}
              onClear={() => onRemoveKeyword(id)}
            />
          ))}
        </SectionContent>
      </Paper>
    </>
  );
};

export default KeywordsList;
