export async function POST(request) {
  let payload = await request.json();
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Required field not present!!!", success: false },
      { status: 400 }
    );
  } else {
    return NextResponse.json(
      { result: "New User created", success: true },
      { status: 201 }
    );
  }
}

export async function PUT(request, content) {
  let payload = await request.json(); // from url param
  payload.id = content.params.id;
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Error, data not valid", success: false },
      { status: 500 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}
