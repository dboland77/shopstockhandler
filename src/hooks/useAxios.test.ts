import { renderHook } from "@testing-library/react-hooks";
import {baseURL} from "../constants";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {useAxios} from "./useAxios";

test("useAxios performs GET request", async () => {
  const axiosConfig = {
    method: "GET",
    url: `http://mock`,
    headers: {
      accept: '*/*'
    },
    baseURL
  };
  const mock = new MockAdapter(axios);

  const mockData = "response";
  mock.onGet(axiosConfig.url).reply(200, mockData);

  const { result, waitForNextUpdate  } = renderHook(() =>
    useAxios(axiosConfig)
  );

  expect(result.current.loading).toBeTruthy();
  
  
  await waitForNextUpdate();
   expect(result.current.loading).toBeFalsy();
});
