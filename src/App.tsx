import { Button, Checkbox } from "@medusajs/ui"

function App() {
  return (
    <>
      <div>
        <Button>Label</Button>
        <div className="flex items-center space-x-2">
          <Checkbox id="billing-shipping" />
          <label htmlFor="billing-shipping">
            Billing address same as shipping address
          </label>
        </div>
      </div>
    </>
  )
}

export default App
