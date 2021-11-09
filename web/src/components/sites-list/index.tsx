import SectionContent from "components/section-content";
import ListItem from "components/list-item";
import { Paper } from "components/common";
import InputAddItem from "components/input-add-item";
import { useQuery, useMutation, gql } from "@apollo/client";

const SITES = gql`
  query Sites {
    sites {
      id
      name
    }
  }
`;

const ADD_SITES = gql`
  mutation addSite($name: String!) {
    addSite(name: $name) {
      id
      name
    }
  }
`;

const REMOVE_SITE = gql`
  mutation removeSite($id: Float!) {
    removeSite(id: $id)
  }
`;

const SitesList = () => {
  const { loading, error, data } = useQuery(SITES);
  const [addSite] = useMutation(ADD_SITES, {
    onError: error => {
      console.log(error);
    },
    refetchQueries: [{ query: SITES }]
  });
  const [removeSite] = useMutation(REMOVE_SITE, {
    onError: error => {
      console.log(error);
    },
    refetchQueries: [{ query: SITES }]
  });

  const onAddSite = (name: string) => {
    const checkString = name.replace(/\s/g, "");
    if (checkString === "") return;

    addSite({ variables: { name } });
  };

  const onRemoveSite = (id: number) => {
    removeSite({ variables: { id } });
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
          <InputAddItem onAdd={onAddSite} itemType={"sites"} />
        </SectionContent>
        <SectionContent>
          {data.sites.map(({ id, name }: any) => (
            <ListItem key={id} value={name} onClear={() => onRemoveSite(id)} />
          ))}
        </SectionContent>
      </Paper>
    </>
  );
};

export default SitesList;
