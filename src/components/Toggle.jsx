import { Switch } from "./ui/switch";


export function Toggle() {
  return (
    <div className="flex items-center space-x-2">
        <label htmlFor="enrolled">Enrolled</label>
      <Switch id="enrolled" />
    </div>
  )
}
