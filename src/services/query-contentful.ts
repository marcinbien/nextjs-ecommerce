import got from "got";
import { ArrayElement } from "../utils/typescript-utils";

export const getContentfulUrl = ({
  space,
  environment,
}: {
  space: string;
  environment?: string;
}) => {
  return environment
    ? `${process.env.CONTENTFUL_API_URL}/content/v1/spaces/${space}/environments/${environment}`
    : `${process.env.CONTENTFUL_API_URL}/content/v1/spaces/${space}`;
};

export type GetContentfulUrlParameters = ArrayElement<
  Parameters<typeof getContentfulUrl>
>;

export const queryContentful = async <TVariables, TData>({
  space,
  environment,
  query,
  variables,
}: GetContentfulUrlParameters & {
  query: any;
  variables: TVariables;
}) => {
  const url = getContentfulUrl({ space, environment });
  const response = await got<{ data: TData }>({
    url,
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
    },
    responseType: "json",
    http2: true,
    timeout: { request: 3000 },
    json: { query, variables },
  });

  console.log("queryContentful", { response: JSON.stringify(response.body) });

  return response;
};
