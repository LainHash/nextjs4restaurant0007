import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import https from "https";

const httpsAgent = new https.Agent({ rejectUnauthorized: false });

export async function POST(req: NextRequest, props: { params: Promise<{ action: string[] }> }) {
    const params = await props.params;
    const actionPath = params.action.join("/");
    const backendUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${actionPath}`;

    try {
        const body = await req.json();
        const authHeader = req.headers.get("authorization");
        
        const response = await axios.post(backendUrl, body, {
            httpsAgent,
            headers: {
                "Content-Type": "application/json",
                ...(authHeader ? { Authorization: authHeader } : {})
            }
        });
        
        return NextResponse.json(response.data, { status: response.status });
    } catch (error: any) {
        console.error("Proxy error:", error.message || error);
        if (error.cause) console.error("Error cause:", error.cause);
        const status = error.response?.status || 500;
        const data = error.response?.data || { message: "Internal proxy error" };
        return NextResponse.json(data, { status });
    }
}
