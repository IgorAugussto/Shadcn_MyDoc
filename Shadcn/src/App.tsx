import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"

export function App() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <div className="flex items-center justify-between">

          <form className="flex items-center gap-2">
            <Input name="id" placeholder="ID do pedido" className="w-auto"></Input>
          </form>

          <Button>Novo Produto</Button>
        </div>
      <div className="border rounded-lg p2">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
          <TableBody>
            {Array.from({length: 10}).map((_, i) => {
              return(
                <TableRow key={i}>
                  <TableCell>6z5d4z51b643z</TableCell>
                  <TableCell>Produto {i}</TableCell>
                  <TableCell>R$ 192,00</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}


