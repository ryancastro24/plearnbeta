// pages/api/download.js
import { NextResponse } from 'next/server';
import { join } from 'path';
import fs from 'fs';

export async function GET(req) {
  const searchParams = new URL(req.url, 'http://localhost').searchParams;
  const filename = searchParams.get('filename');
  const filePath = join(process.cwd(), 'public', 'uploadFiles', filename);

  // Check if the file exists
  
  const stat = fs.statSync(filePath);

  const fileStream = fs.createReadStream(filePath);

  return new NextResponse(fileStream, {
    headers: {
      'Content-Length': stat.size.toString(),
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename=${filename}`,
    },
  });
}
