import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");
        const dept = searchParams.get("dept");

        const tasks = await prisma.evidenceTask.findMany({
            where: {
                AND: [
                    status ? { status } : {},
                    dept ? { department: dept } : {}
                ]
            },
            orderBy: { updatedAt: 'desc' }
        });

        // Seed with some default tasks if empty for demo purposes
        if (tasks.length === 0) {
            const seedTasks = [
                { name: 'Business Continuity Plan and Disaster recovery plan - Testing Results', status: 'Not Uploaded', department: 'IT', framework: 'SOC2' },
                { name: 'Code Review Results and Action Items', status: 'Not Uploaded', department: 'IT', framework: 'SOC2' },
                { name: 'Documented Asset Inventory and Review Dates', status: 'Not Uploaded', department: 'IT', framework: 'SOC2' },
                { name: 'Documented Organizational Chart with Reporting Lines', status: 'Not Uploaded', department: 'HR', framework: 'SOC2' },
                { name: 'Enabled Multi-Factor Authentication', status: 'Uploaded', department: 'IT', framework: 'SOC2' },
            ];

            await prisma.evidenceTask.createMany({
                data: seedTasks
            });

            const newTasks = await prisma.evidenceTask.findMany({
                orderBy: { updatedAt: 'desc' }
            });
            return NextResponse.json(newTasks);
        }

        return NextResponse.json(tasks);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const task = await prisma.evidenceTask.create({
            data: {
                name: body.name,
                description: body.description,
                status: body.status || 'Not Uploaded',
                assignee: body.assignee,
                department: body.department,
                framework: body.framework,
                dueDate: body.dueDate ? new Date(body.dueDate) : null,
            }
        });
        return NextResponse.json(task);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
