import { QueryClientProvider } from "@tanstack/react-query"
import MasterRouter from "routers/master"
import { queryClient } from "utils/api/client/query-client"

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MasterRouter />
      </QueryClientProvider>
    </>
  )
}

export default App
