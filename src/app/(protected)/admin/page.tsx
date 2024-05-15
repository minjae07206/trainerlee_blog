"use client";

import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";

const AdminPage = () => {
    const role = useCurrentRole();
    return (
        <div>
            Current role: {role}
            <RoleGate allowedRole={UserRole.ADMIN}>
                <FormSuccess message="You are allowed to view this content"/>
            </RoleGate>
        </div>
    )
}

export default AdminPage;