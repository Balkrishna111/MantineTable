import { Box, Text } from "@mantine/core";
import {
  MantineReactTable,
  MRT_ColumnDef,
  useMantineReactTable,
} from "mantine-react-table";
import { MRT_Localization_FA } from "mantine-react-table/locales/fa/index.cjs";
import { useMemo } from "react";

export type Person = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  country: string;
};

export const data = [
  {
    id: "1",
    firstName: "Dylan",
    middleName: "Sprouse",
    lastName: "Murray",
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
    country: "United States",
  },
  {
    id: "2",
    firstName: "Raquel",
    middleName: "Hakeem",
    lastName: "Kohler",
    address: "769 Dominic Grove",
    city: "Vancouver",
    state: "British Columbia",
    country: "Canada",
  },
  {
    id: "3",
    firstName: "Ervin",
    middleName: "Kris",
    lastName: "Reinger",
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
    country: "United States",
  },
  {
    id: "4",
    firstName: "Brittany",
    middleName: "Kathryn",
    lastName: "McCullough",
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
    country: "United States",
  },
  {
    id: "5",
    firstName: "Branson",
    middleName: "John",
    lastName: "Frami",
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
    country: "United States",
  },
];

const BasicTable = () => {
  const columns = useMemo(
    () =>
      [
        {
          accessorKey: "id",
          header: "ID",
          size: 50,
        },
        {
          accessorKey: "firstName",
          header: "First Name",
        },
        {
          accessorKey: "middleName",
          header: "Middle Name",
        },
        {
          accessorKey: "lastName",
          header: "Last Name",
        },
      ] as MRT_ColumnDef<Person>[],
    []
  );

  //   const table = useMantineReactTable({
  //     columns,
  //     data,
  //     renderDetailPanel={() => (
  //         <Box
  //           style={{
  //             display: 'grid',
  //             margin: 'auto',
  //             gridTemplateColumns: '1fr 1fr',
  //             width: '100%',
  //           }}
  //         >
  //           <Text>Address: asfdsadf</Text>
  //           <Text>City: safasdf</Text>
  //           <Text>State: asdfsadf</Text>
  //           <Text>Country: sadfsafasd</Text>
  //         </Box>
  //       )}
  //   });

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      //   style={{ direction: "rtl" }}
    >
      <MantineReactTable
        columns={columns}
        data={data}
        defaultColumn={{
          maxSize: 400,
          minSize: 80,
          size: 150, //default size is usually 180
        }}
        enableRowActions
        // localization={MRT_Localization_FA}
        renderDetailPanel={({ row }) => (
          <Box
            style={{
              display: "grid",
              margin: "auto",
              gridTemplateColumns: "1fr 1fr",
              width: "100%",
            }}
          >
            <Text>Address: {row.original.address}</Text>
            <Text>City: {row.original.address}</Text>
            <Text>State: {row.original.address}</Text>
            <Text>Country: {row.original.address}</Text>
          </Box>
        )}
      />
    </div>
  );
};
export default BasicTable;
