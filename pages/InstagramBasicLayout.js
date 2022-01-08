import React, { useState, useCallback } from "react";
import {
  Card,
  Layout,
  Stack,
  TextStyle,
  Thumbnail,
  TextField,
  FormLayout,
  Select,
  Heading,
} from "@shopify/polaris";
function InstagramBasicLayout(props) {
    // alignment select
  const [alignselected, setalignSelected] = useState("item");

  const handlealignmentfield = useCallback(
    (value) => setalignSelected(value),
    []
  );

  const options = [
    { label: "Item", value: "Item" },
    { label: "Item", value: "Item" },
    { label: "Item", value: "Item" },
    { label: "Item", value: "Item" },
  ];

//   layout select

const [layoutselected, setlayoutSelected] = useState("item");

const handlelayoutfield = useCallback(
  (value) => setlayoutSelected(value),
  []
);

const layout_options = [
  { label: "Item", value: "Item" },
  { label: "Item", value: "Item" },
  { label: "Item", value: "Item" },
  { label: "Item", value: "Item" },
];

// Rows Select

const [rowselected, setrowSelected] = useState("item");

const handlerowfield = useCallback(
  (value) => setrowSelected(value),
  []
);

const row_options = [
  { label: "Item", value: "Item" },
  { label: "Item", value: "Item" },
  { label: "Item", value: "Item" },
  { label: "Item", value: "Item" },
];

// Section title 
 

  return (
    <>
      <Layout>
        <Layout.Section>
          <Card sectioned={true}>
              <Heading element="h6" spacing="loos" class="top">Basic Layout Setting</Heading>
            <FormLayout.Group condensed>
              <TextField
                label="Feed Title"
                onChange={() => {}}
                autoComplete="off"
               
              />
              <Select
                label="Alignment"
                options={options}
                onChange={handlealignmentfield}
                value={alignselected}
              />
              <TextField label="Size" onChange={() => {}} autoComplete="off" />
            </FormLayout.Group>
              <Heading element="h6"spacing="loos" >Photo Setting</Heading>
            <FormLayout.Group condensed>
              <Select
                label="layout"
                options={layout_options}
                onChange={handlelayoutfield}
                value={layoutselected}
              />
              <TextField
                label="Image Spacing"
                onChange={() => {}}
                autoComplete="off"
              />
              <TextField
                label="On Image Click"
                onChange={() => {}}
                autoComplete="off"
              />
              <Select
                label="Rows"
                options={options}
                onChange={handlerowfield}
                value={rowselected}
              />
              <TextField
                label="Coulumn"
                onChange={() => {}}
                autoComplete="off"
              />
            </FormLayout.Group>
            
          </Card>
        </Layout.Section>
      </Layout>
    </>
  );
}

export default InstagramBasicLayout;
