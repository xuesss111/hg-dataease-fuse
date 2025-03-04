import config from "@/config";
import type { Item } from "@/types/list";
import http from "@/utils/http";
import type { PageInfo, Result } from "@cacp/ui";
import type { AxiosResponse } from "axios";

const contextPath = "/gate-passing-manifest";

export async function getCardList(data: Item): Promise<Result<PageInfo<any>>> {
  const res: AxiosResponse<Result<PageInfo<Item>>> = await http.post(
    `${config.SERVICE_API}${contextPath}/list-page`,
    data
  );

  return res.data;
}
