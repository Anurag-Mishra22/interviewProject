import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactPop() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button >Contact</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contact Info</DialogTitle>
                    <DialogDescription>
                        Plz fill the detail below to contact me.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Anurag Mishra" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Email
                        </Label>
                        <Input id="username" value="abc@gmail.com" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" variant={"ghost"}>Contact</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
